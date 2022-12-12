class UsersController < ApplicationController
  before_action :authenticate_user
  # ActiveStorage::Current.url_options = {host: "localhost:3000"}
  before_action do

    ActiveStorage::Current.url_options = { protocol: request.protocol, host: request.host, port: request.port }
  end

    def user_params
        params.require(:user).permit(:email, :password, :password_confirmation)
    end
    def password_params
        params.require(:user).permit(:password, :password_confirmation)
    end
end
