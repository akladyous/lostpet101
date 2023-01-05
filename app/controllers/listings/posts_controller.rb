module Listings
  class PostsController < ApplicationController
    skip_before_action :authenticate_user

    def index
      @posts = Report.search(listings_params)
      render json: @posts, status: :ok
    end

    private
    def listings_params
      params.permit(:name, :species, :breed).reject! { |_, v| v.blank? }
    end
  end
end
