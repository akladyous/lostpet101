class Users::PasswordMailer < ApplicationMailer

    def reset_password
        @token = params[:user].signed_id(purpose: 'reset_password', expires_in: 90.minutes)
        @user = params[:user]
        mail to: @user.email, subject: "reset account password"
    end
end
