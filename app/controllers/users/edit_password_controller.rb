class Users::EditPasswordController < UsersController
  before_action :authenticate_user

  def update
    @password_form = PasswordForm.new(current_user)
    if @password_form.submit(password_params)
      current_user.password = password_params[:new_password]
      current_user.save!
      render json: {message: 'password changed successfully'}, status: :ok
    else
      render json: {error: @password_form.errors.uniq.to_sentence}, status: :unprocessable_entity
    end
  end

  private
  def password_params
      params.require(:password).permit(:original_password, :new_password, :new_password_confirmation)
  end
end
