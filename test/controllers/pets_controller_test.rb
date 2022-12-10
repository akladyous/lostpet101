require "test_helper"

class PetsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @pet = pets(:one)
  end

  test "should get index" do
    get pets_url, as: :json
    assert_response :success
  end

  test "should create pet" do
    assert_difference("Pet.count") do
      post pets_url, params: { pet: { age: @pet.age, breed: @pet.breed, coat: @pet.coat, collar: @pet.collar, color: @pet.color, description: @pet.description, gender: @pet.gender, height: @pet.height, microchip: @pet.microchip, name: @pet.name, report_id: @pet.report_id, size: @pet.size, species: @pet.species, weight: @pet.weight } }, as: :json
    end

    assert_response :created
  end

  test "should show pet" do
    get pet_url(@pet), as: :json
    assert_response :success
  end

  test "should update pet" do
    patch pet_url(@pet), params: { pet: { age: @pet.age, breed: @pet.breed, coat: @pet.coat, collar: @pet.collar, color: @pet.color, description: @pet.description, gender: @pet.gender, height: @pet.height, microchip: @pet.microchip, name: @pet.name, report_id: @pet.report_id, size: @pet.size, species: @pet.species, weight: @pet.weight } }, as: :json
    assert_response :success
  end

  test "should destroy pet" do
    assert_difference("Pet.count", -1) do
      delete pet_url(@pet), as: :json
    end

    assert_response :no_content
  end
end
