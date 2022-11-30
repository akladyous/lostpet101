class UsersController < ApplicationController
  before_action :authenticate_user

    def user_params
        params.require(:user).permit(:email, :password, :password_confirmation)
    end
    def password_params
        params.require(:user).permit(:password, :password_confirmation)
    end
end
