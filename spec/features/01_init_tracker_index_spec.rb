require 'rails_helper'

feature "see init tracker form on entry" do
  before(:each) do
    visit init_tracker_path
  end

  scenario "user asked for number of players" do

    expect(page).to have_content("Salutations!")
    expect(page).to have_content("How many players are there?")
    expect(page).to have_field("#pcCount")
  end

  scenario "user asked for number of NPCs" do
      expect(page).to have_content("How many NPCs are there?")
      expect(page).to have_field("#npcCount")
  end

  scenario "page has creation button" do
      expect(page).to have_button('Create Tracker')
  end

  scenario "user creates table" do
    fill_in 'pcCount', with: 5
    fill_in 'npcCount', with: 2

    click_button 'Create Tracker'

    expect(page).to have_table("#tracking")
    expect(page).to_not have_content("Salutations")
  end

end

feature "table created from relevant information" do
  before(:each) do
    fill_in 'pcCount', with: 5
    fill_in 'npcCount', with: 2

    click_button 'Create Tracker'
  end

  scenario "user goes to show page for a submission for comments" do
    steven = FactoryGirl.create(:user)

    first_comment = FactoryGirl.create(:comment, submission: @min_submission, user: steven)

    login_as(steven, :scope => :user)
    visit submission_path(@min_submission)

    expect(page).to have_content(first_comment.body)
    expect(page).to have_content(steven.username)
  end
end
