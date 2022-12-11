export default function RememberMe() {
    return (
        <div className="flex items-center">
            <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                disabled
            />
            <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
            >
                Remember me
            </label>
        </div>
    );
}
