
class HomeController < ApplicationController
  skip_before_action :authenticate_user
  def index
    # render file: 'public/index.html'
    render file: Rails.root.join('public', 'index.html')
  end
end
