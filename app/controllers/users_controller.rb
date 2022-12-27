class UsersController < ApplicationController
  before_action :authenticate_user
    def password_params
        params.require(:user).permit(:password, :password_confirmation)
    end
end
