class Users::ResetPasswordController < UsersController
  before_action :anonymous_user
  skip_before_action :authenticate_user

  def create
    @user = User.find_by(email: password_params[:email])
    if @user.present?
      @token = @user.signed_id(purpose: 'reset_password', expires_in: 30.minutes)
      # Users::PasswordMailer.with(user: @user).reset_password.deliver_now
      render json: { token: @token }, status: :ok
    else
      render json: { error: 'Please enter a valid email address' }, status: :unprocessable_entity
    end
  end

  def update
    @user = User.find_signed!(password_params[:token], purpose: 'reset_password')
    if @user.update(password_params.except(:token, :email))
        render json: {message: 'password changed successfully'}, status: :ok
    else
        render json: { error: @user.errors.full_messages.uniq.to_sentence }
    end
  end

  protected
  def password_params
    params.require(:password).permit(:email, :token, :password, :password_confirmation)
  end

  def anonymous_user
    render json:{ error: 'You are already signed in!'}, status: :unprocessable_entity and return if current_user
  end
end
