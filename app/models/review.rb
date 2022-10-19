class Review < ApplicationRecord
    belongs_to :buyer
    belongs_to :admin
    belongs_to :product
end
