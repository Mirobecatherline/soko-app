class UsersController < ApplicationController
    def create
        user = Users.create(name: params[:name], items: params[:items])
        render json: user, status: :created
      end
  end