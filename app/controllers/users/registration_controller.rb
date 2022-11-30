class Users::RegistrationController < UsersController
  skip_before_action :authenticate_user, only: :create

  def create
    @user = User.new(user_params)
    if @user.save
      login @user
      render json: @user, status: :created
    else
      render json: { error: @user.errors.full_messages.to_sentence}, status: :unprocessable_entity
    end

  end

  def destroy
    @user = User.find_by(id: current_user.id)
    @user.destroy
    render json: { message: 'User account has been successfully deleted'}, status: :ok
  end
end
