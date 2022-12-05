class RenameColumnLastLoginAtToLastSigninAt < ActiveRecord::Migration[7.0]
  def change
    rename_column :users, :last_login_at, :last_signin_at
  end
end
