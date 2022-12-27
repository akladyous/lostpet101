class Users::SessionController < UsersController
  skip_before_action :authenticate_user, only: :create
  before_action :set_user, only: :create

  def create
    if @user.present? && password_valid?
      login @user
      @user.touch :updated_at
      render json: @user, status: :ok
    else
      render json: {message: "Invalid Email or Password"}, status: :unauthorized
    end
  end

  def destroy
    if current_user
      logout current_user
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

  def password_valid?
    @user.authenticate(user_params[:password]) if @user
  end
end
