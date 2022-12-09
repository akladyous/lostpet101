class ApplicationController < ActionController::API
    include ActionController::Cookies
    include ActionController::RequestForgeryProtection
    protect_from_forgery with: :exception, unless: -> { request.format.json? }



  protected
    def login(user)
        session[:user_id] = user.id
        user.touch(:last_signin_at)
    end

    def logout(user)
        session.delete :user_id
    end

  def authenticate_user
    unless current_user
        render json: {error: "User not authorized"}, status: :unauthorized
    end
  end

    def current_user
      if session[:user_id]
          @current_user ||= User.find_by(id: session[:user_id])
      end
    end
end
