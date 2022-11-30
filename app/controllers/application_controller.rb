class ApplicationController < ActionController::API

  protected
    def login(user)
        session[:user_id] = user.id
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
