class LikeSerializer < ActiveModel::Serializer
  attributes :id, :user_email, :user_image_url

  def user_email
    object.user.email
  end
  def user_image_url
    object.user.avatar.blob.url if object.user.avatar.attached?
  end
end
