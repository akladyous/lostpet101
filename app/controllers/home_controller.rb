
class HomeController < ApplicationController
  def index
    render file: 'public/index.html'
    # render file: Rails.root.join('public', 'index.html')
  end
end
