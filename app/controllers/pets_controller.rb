class PetsController < ApplicationController
  skip_before_action :verify_authenticity_token
  skip_before_action :authenticate_user, only: [:index, :show]
  before_action :set_pet, only: %i[ show update destroy ]

  # GET /pets
  def index
    @pets = Pet.includes(:likes).all
    render json: @pets, status: :ok
  end

  # GET /pets/1
  def show
    render json: @pet
  end

  # POST /pets
  def create
    @pet = Pet.new(pet_params)

    if @pet.save
      render json: @pet, status: :created, location: @pet
    else
      render json: @pet.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /pets/1
  def update
    if @pet.update(pet_params)
      render json: @pet
    else
      render json: @pet.errors, status: :unprocessable_entity
    end
  end

  # DELETE /pets/1
  def destroy
    @pet.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pet
      @pet = Pet.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def pet_params
      params.require(:pet).permit(:image, :name, :species, :gender, :size, :breed, :color, :coat, :age, :height, :weight, :microchip, :collar, :description, :report_id)
    end
end
