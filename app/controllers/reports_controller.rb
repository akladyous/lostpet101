class ReportsController < ApplicationController
  # protect_from_forgery with: :null_session
  skip_before_action :verify_authenticity_token

  before_action :set_report, only: %i[ show update destroy ]

  # GET /reports
  def index
    @reports = Report.all

    render json: @reports
  end

  # GET /reports/1
  def show
    render json: @report
  end

  # POST /reports
  def create
    @report = Report.new(report_params)
    @report.user_id = current_user
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
    def report_params
      params
        .require(:report)
        .permit( :type,  :lost_found_date,  :address,  :crossroads,  :comment,  :user_id,
          pet_attributes: [:image, :name, :species, :gender, :size, :breed, :color, :coat, :age, :height, :weight, :microchip, :collar, :description]
        )
    end
end
