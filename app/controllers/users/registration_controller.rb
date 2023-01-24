class Users::RegistrationController < UsersController
  skip_before_action :authenticate_user, only: :create

  # enable on : active_storage.service = :local
  # before_action do
  #     ActiveStorage::Current.url_options = { protocol: request.protocol, host: request.host, port: request.port }
  # end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render json: @user, status: :created
    else
      errors = @user.errors.to_hash.inject({}) { |acc, (k,v)|
        acc[k] = "#{k.to_s.split('_').join(' ')} #{v.first}"
        acc
      }
      sleep 1
      render json: {validation: errors}, status: :unprocessable_entity
    end

  end

  def destroy
    @user = User.find_by(id: current_user.id)
    @user.destroy
    render json: { message: 'User account has been successfully deleted'}, status: :ok
  end

  private

  def user_params
    params.permit(:email, :password, :password_confirmation, :avatar)
  end

end
