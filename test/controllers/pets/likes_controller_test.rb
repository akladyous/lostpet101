require "test_helper"

class Pets::LikesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @pets_like = pets_likes(:one)
  end

  test "should get index" do
    get pets_likes_url, as: :json
    assert_response :success
  end

  test "should create pets_like" do
    assert_difference("Pets::Like.count") do
      post pets_likes_url, params: { pets_like: { pet_id: @pets_like.pet_id, user_id: @pets_like.user_id } }, as: :json
    end

    assert_response :created
  end

  test "should show pets_like" do
    get pets_like_url(@pets_like), as: :json
    assert_response :success
  end

  test "should update pets_like" do
    patch pets_like_url(@pets_like), params: { pets_like: { pet_id: @pets_like.pet_id, user_id: @pets_like.user_id } }, as: :json
    assert_response :success
  end

  test "should destroy pets_like" do
    assert_difference("Pets::Like.count", -1) do
      delete pets_like_url(@pets_like), as: :json
    end

    assert_response :no_content
  end
end
