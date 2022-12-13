class UserSerializer < ActiveModel::Serializer
  attributes :email, :photo_url, :last_signin_at, :created_at

  def photo_url
    object.avatar.blob.url if object.avatar.attached?
  end
end
