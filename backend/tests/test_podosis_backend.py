"""Backend API tests for Podosis static site contact form endpoints."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://healthy-steps-13.preview.emergentagent.com").rstrip("/")


@pytest.fixture
def api():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# --- Root & health ---
class TestRootHealth:
    def test_api_root(self, api):
        r = api.get(f"{BASE_URL}/api/", timeout=15)
        assert r.status_code == 200
        data = r.json()
        assert "message" in data
        assert data.get("status") == "ok"

    def test_api_health(self, api):
        r = api.get(f"{BASE_URL}/api/health", timeout=15)
        assert r.status_code == 200
        assert r.json().get("status") == "ok"


# --- Contact endpoint ---
class TestContact:
    def test_contact_create_valid(self, api):
        payload = {
            "name": "TEST_User",
            "phone": "+905550001122",
            "message": "Merhaba, bilgi almak istiyorum.",
        }
        r = api.post(f"{BASE_URL}/api/contact", json=payload, timeout=15)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["phone"] == payload["phone"]
        assert data["message"] == payload["message"]
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert "created_at" in data
        # created_at should be ISO string parseable
        from datetime import datetime
        datetime.fromisoformat(data["created_at"].replace("Z", "+00:00"))

    def test_contact_create_persists_in_list(self, api):
        unique_msg = "TEST_UNIQUE_MSG_" + os.urandom(4).hex()
        payload = {"name": "TEST_Persist", "phone": "+905550003344", "message": unique_msg}
        r = api.post(f"{BASE_URL}/api/contact", json=payload, timeout=15)
        assert r.status_code == 200
        list_r = api.get(f"{BASE_URL}/api/contact", timeout=15)
        assert list_r.status_code == 200
        items = list_r.json()
        assert isinstance(items, list)
        # No _id leaks
        for it in items:
            assert "_id" not in it
        assert any(it.get("message") == unique_msg for it in items)

    def test_contact_invalid_short_name(self, api):
        payload = {"name": "A", "phone": "+905550000000", "message": "Merhaba"}
        r = api.post(f"{BASE_URL}/api/contact", json=payload, timeout=15)
        assert r.status_code == 422

    def test_contact_invalid_missing_fields(self, api):
        r = api.post(f"{BASE_URL}/api/contact", json={"name": "TEST_x"}, timeout=15)
        assert r.status_code == 422

    def test_contact_invalid_short_message(self, api):
        payload = {"name": "TEST_x", "phone": "+905550000000", "message": "A"}
        r = api.post(f"{BASE_URL}/api/contact", json=payload, timeout=15)
        assert r.status_code == 422

    def test_contact_list_returns_list(self, api):
        r = api.get(f"{BASE_URL}/api/contact", timeout=15)
        assert r.status_code == 200
        assert isinstance(r.json(), list)
