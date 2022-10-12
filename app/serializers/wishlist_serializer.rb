class WishlistSerializer < ActiveModel::Serializer
  attributes :id, :product_name, :buyer_id
end
