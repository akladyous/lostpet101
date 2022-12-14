class Users::SessionController < UsersController
  skip_before_action :authenticate_user, only: :create

  def create
    @user = User.find_by(email: user_params[:email])
    auth = @user.authenticate(user_params[:password]) if @user
    if @user.present? && auth
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

  def user_params
    params.permit(:email, :password)
  end
end
