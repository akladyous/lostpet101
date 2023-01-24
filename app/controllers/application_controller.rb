class ApplicationController < ActionController::API
  include ActiveStorage::SetCurrent
  include ActionController::Cookies
  include ActionController::RequestForgeryProtection
  protect_from_forgery with: :exception


  before_action :authenticate_user
  before_action :set_url_options

  private

  def authenticate_user
    unless current_user
      render json: {error: "User not authorized"}, status: :unauthorized
    end
  end

  def current_user
    @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
  end

  def login(user)
    session[:user_id] = user.id
    user.touch(:last_signin_at)
  end

  def logout
    session.delete :user_id
    session[:expire_at] = 20.seconds.from_now
  end

  def set_url_options
    ActiveStorage::Current.url_options = { protocol: request.protocol, host: request.host, port: request.port }
  end

end
