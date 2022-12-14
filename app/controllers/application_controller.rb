class ApplicationController < ActionController::API
    include ActionController::Cookies
    include ActionController::RequestForgeryProtection
    include ActiveStorage::SetCurrent
    protect_from_forgery with: :exception, unless: -> { request.format.json? }



  protected
    def login(user)
      session[:user_id] = user.id
      user.touch(:last_signin_at)
    end

    def logout(user)
      session.delete :user_id
      reset_session
      # request.session_options = request.session_options.dup
      # request.session_options[:expire_after]= 20.seconds
      # request.session_options.freeze
      # session[:expire_at] = 20.seconds.from_now
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
