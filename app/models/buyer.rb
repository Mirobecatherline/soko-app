class Buyer < ApplicationRecord
    has_secure_password
    has_one :wishlist 
    has_many :products
    has_many :reviews, through: :products
end
