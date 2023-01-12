class LikeSerializer < ActiveModel::Serializer
  attributes :id, :user_image_url

  def user_image_url
    object.user.avatar.blob.url if object.user.avatar.attached?
  end
end
