class AddLastLoginAtToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :last_signin_at, :datetime
  end
end
