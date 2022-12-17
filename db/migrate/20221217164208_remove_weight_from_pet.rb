class RemoveWeightFromPet < ActiveRecord::Migration[7.0]
  def change
    remove_column :pets, :weight, :decimal
  end
end
