class Admin < ApplicationRecord
    has_secure_password
    has_many :products
    has_many :reviews, through: :products
end
