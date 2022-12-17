class RemoveCoatFromPet < ActiveRecord::Migration[7.0]
  def change
    remove_column :pets, :coat, :string
  end
end
