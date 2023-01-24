class ReportRequestsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @report_request = ReportRequest.new(request_params)
    if @report_request.save
      render json: @report_request, status: :ok
    else
      render json: @report_request.errors, status: :unprocessable_entity
    end
  end


  private

  def request_params
    params.require(:report_request).permit(:message)
  end
end
