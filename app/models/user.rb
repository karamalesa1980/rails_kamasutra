class User < ApplicationRecord
   has_one :profiles, dependent: :destroy
   self.per_page = 5
end
