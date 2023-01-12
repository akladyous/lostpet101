class LikesController < ApplicationController
 before_action :set_pet

  def show
    render json: @pets_like
  end

  def create
    @pet.likes.where(urer_id: current_user.id).first_or_create
    render json: @pet, status: :created, location: @pets_like

  end

  def destroy
    @pet.likes.where(user_id: current_user.id).destroy_all
    render status: :ok
  end

  private
    def set_pet
      @pet = Pet.find(params[:pet_id])
    end
end
