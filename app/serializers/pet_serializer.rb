class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :species, :gender, :size, :breed, :color, :coat, :age, :height, :weight, :microchip, :collar, :description
  has_one :report
end
