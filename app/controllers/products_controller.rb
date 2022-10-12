class ProductsController < ApplicationController
    def index
        products = Product.all
        render json: products
    end

    def show 
        product= Product.find[params[:id]]
        render json: product 
    end

    def create 
        product = Product.create(params.permit(:product_name))
        render json: product, status: :created
    end

    def update 
        product = Product.find_by(id: params[:id])
        if product 
            product.update(product_params)
            render json: product 
        else 
            render json: {error: "Product was not available"}
        end
    end

    def destroy
        product = Product.find(params[:id])
        product.destroy
        head :no_content 
    end

    private 
    
    def product_params
        params.permit(:product_name)
    end
end
