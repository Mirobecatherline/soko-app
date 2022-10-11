class Product < ApplicationRecord
    belongs_to :buyer
    belongs_to :review 
    belongs_to :admin 
end
