class RemoveHeightFromPet < ActiveRecord::Migration[7.0]
  def change
    remove_column :pets, :height, :decimal
  end
end
