class Users::SessionController < UsersController
  include ActiveStorage::SetCurrent
  before_action :set_user, only: :create
  skip_before_action :authenticate_user, only: :create


  def create
    if @user.present? && has_valid_password?
      session[:user_id] = @user.id
      @user.touch(:last_signin_at)
      @user.touch(:updated_at)
      render json: @user, status: :ok
    else
      render json: {message: "Invalid Email or Password"}, status: :unauthorized
    end
  end

  def destroy
    if current_user
      session.delete :user_id
      session[:expire_at] = 20.seconds.from_now
      render json: {message: "Logout successfully completed"}, status: :ok
    else
      render json: {message: "User not signed in"}, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.permit(:email, :password)
  end

  def set_user
    @user = User.find_by(email: user_params[:email])
  end

  def has_valid_password?
    @user.authenticate(user_params[:password]) if @user
  end
end
