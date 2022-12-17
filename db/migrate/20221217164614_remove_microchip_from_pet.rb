class RemoveMicrochipFromPet < ActiveRecord::Migration[7.0]
  def change
    remove_column :pets, :microchip, :integer
  end
end
