class UserSerializer < ActiveModel::Serializer
  attributes :email, :avatar

  def avatar
        # if object.is_attached?
        if object.avatar.attached?
            # Rails.application.routes.url_helpers.rails_blob_url(self.object.avatar.blob, only_path: true)
            object.avatar.blob.url
        else
            nil
        end
    end
end
