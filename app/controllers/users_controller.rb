class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

    def password_params
        params.require(:user).permit(:password, :password_confirmation)
    end
end
