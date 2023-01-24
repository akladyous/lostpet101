class ReportsController < ApplicationController
  skip_before_action :authenticate_user, only: %i[index search]
  skip_before_action :verify_authenticity_token
  before_action :set_report, only: %i[ show update destroy ]

  def index
    @reports = Report.all.includes(:pet).order(created_at: :desc)
    render json: @reports
  end

  def search
    @reports = Report.search(search_params)
    render json: @reports, status: :ok
  end

  def show
    render json: @report
  end

  def create
    @report = Report.new(report_params)
    @report.user_id = current_user.id
    if @report.save
      render json: @report, status: :created, location: @report
    else
      render json: @report.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reports/1
  def update
    if @report.update(report_params)
      render json: @report
    else
      render json: @report.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reports/1
  def destroy
    @report.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_report
      @report = Report.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def search_params
      params.permit(:name, :species, :breed).reject! { |_, v| v.blank? }
    end
    def report_params
      params
        .require(:report)
        .permit( :report_type,  :lost_found_date,  :address,  :crossroads,  :comment,  :user_id,
          pet_attributes: [:image, :name, :species, :gender, :size, :breed, :color, :coat, :age, :height, :weight, :microchip, :collar, :description]
        )
    end
end
