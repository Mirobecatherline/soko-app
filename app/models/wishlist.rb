class Wishlist < ApplicationRecord
    belongs_to :buyer 
    has_many :products 
end
