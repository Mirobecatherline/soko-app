class Product < ApplicationRecord
    belongs_to :admin
    belongs_to :buyer
    has_many :reviews
    
end
