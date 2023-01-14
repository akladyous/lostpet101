class LikesController < ApplicationController
skip_before_action :verify_authenticity_token
before_action :authenticate_user
before_action :set_pet

def show
  render json: @pet.likes, status: :ok
end

def create
  # system 'clear'
  # debugger
  # puts "totale likes count : #{@pet.likes.count}"
  @pet.likes.where(user: current_user).destroy_all
  # puts "totale likes count : #{@pet.likes.count}"
  @pet.likes.where(user: current_user).first_or_create
  render json: @pet.likes, status: :created, location: @pets_like
end

def destroy
  # system 'clear'
  # debugger
  # puts "totale likes count : #{@pet.likes.count}"
  @pet.likes.where(user: current_user).destroy_all
  # puts "totale likes count : #{@pet.likes.count}"
  render json: @pet.likes, status: :ok, location: @pet
end

private
  def set_pet
    @pet = Pet.find(likes_params[:pet_id])
  end

  def likes_params
    params.permit(:pet_id)
  end
end
