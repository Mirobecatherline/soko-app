class Product < ApplicationRecord
    belongs_to :admin
    belongs_to :buyer
    belongs_to :wishlist
    has_many :reviews
    
end
