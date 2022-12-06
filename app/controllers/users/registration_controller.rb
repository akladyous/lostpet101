class Users::RegistrationController < UsersController
  skip_before_action :authenticate_user, only: :create

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render json: @user, status: :created
      # render json: {message: "Account successfully created", date_time: Time.now, email: current_user.email}, status: :ok
    else
      render json: { error: @user.errors.to_json}, status: :unprocessable_entity
    end

  end

  def destroy
    @user = User.find_by(id: current_user.id)
    @user.destroy
    render json: { message: 'User account has been successfully deleted'}, status: :ok
  end

  private
  def user_params
    params.permit(:email, :password, :password_confirmation)
  end
end
