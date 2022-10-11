class AdminsController < ApplicationController
    def create
        admin=Admin.create(admin_params)
        if admin.valid?
            session[:admin_id]=admin.id
            render json: admin, status: :created
        else
            render json: { errors: admin.errors.full_messages }, status: :unprocessable_entity
        end
    end
    def show
        return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :admin_id
        admin=Admin.find_by(id: session[:admin_id])
        render json: admin, status: :ok
      
    end
    private

    def admin_params
        params.permit(:adminname,:password, :password_confirmation)
    end
end

