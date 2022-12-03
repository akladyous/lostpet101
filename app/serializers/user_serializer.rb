class UserSerializer < ActiveModel::Serializer
  attributes :email, :avatar

  def avatar
        if object.avatar.attached?
            Rails.application.routes.url_helpers.rails_blob_url(self.object.avatar.blob, only_path: true)
        else
            nil
        end
    end
end
